import { io } from 'socket.io-client';
import { defineStore } from 'pinia';
import { ref, reactive, watch } from 'vue';
import { apiAuth } from '@/axios/index';

import { useSwalStore } from '@/stores/swal';
import { useUserStore } from '@/stores/users';

export const useChatsStore = defineStore('chats', () => {
  const user = useUserStore();
  const { swalError } = useSwalStore();
  const socket = reactive({});
  socket.current = io(import.meta.env.VITE_API, {
    extraHeaders: {
      header: 'socket',
    },
  });

  const showList = ref(false);
  const showChat = ref(false);
  const fromUserId = ref();
  const toUser = reactive({
    _id: '',
    name: '',
    image: '',
  });
  const message = ref('');
  const messages = ref([]);
  const chatUserList = ref([]);
  const listUser = ref('');

  const getChatAllHandler = async () => {
    try {
      const { data } = await apiAuth.post('/chat/all', {
        fromUserId: fromUserId.value,
        toUserId: toUser._id,
      });
      messages.value = data.result;
    } catch (error) {
      swalError(error);
    }
  };

  watch([showList, showChat], ([list, chat]) => {
    if (list) {
      getChatAllUserHandler();
    }
    if (list || chat) {
      socket.current.emit('add-user', user.users._id);
    }
    socket.current.on('show-user', (data) => {
      listUser.value = data;
      const index = chatUserList.value.findIndex((item) => {
        return item._id === data.fromUser._id;
      });
      if (index === -1) {
        chatUserList.value.push({
          _id: data.fromUser._id,
          name: data.fromUser.name,
          image: data.fromUser.image,
        });
      }
    });
  });

  watch(
    () => toUser._id,
    (value) => {
      if (value !== '') {
        socket.current.on('msg-recieve', (message) => {
          messages.value.push({
            fromSelf: false,
            message,
          });
        });
      }
    }
  );

  const addChatUserHandler = (item) => {
    if (!user.isLoginHandler()) return;
    showChat.value = true;

    toUser._id = item.userId || item._id;
    toUser.name = item.name;
    toUser.image = item.image;
    fromUserId.value = user.users._id;

    const blockIndex = item.black.findIndex((item) => item === user.users._id);
    if (blockIndex !== -1) {
      showChat.value = false;
      showList.value = false;
      swalError('?????????????????????');
    }

    getChatAllHandler();

    socket.current.emit('show-user', {
      fromUser: {
        _id: user.users._id,
        name: user.users.name,
        image:
          user.users.image ||
          `https://source.boringavatars.com/beam/256/${user.users.name}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`,
      },
      toUserId: item.toUserId,
    });
  };

  const sendChatHandler = async () => {
    try {
      if (message.value === '') return;

      await apiAuth.post('/chat', {
        fromUserId: fromUserId.value,
        toUserId: toUser._id,
        message: message.value,
      });
      socket.current.emit('send-msg', {
        fromUserId: fromUserId.value,
        toUserId: toUser._id,
        message: message.value,
      });

      messages.value.push({
        fromSelf: true,
        message: message.value,
      });
      message.value = '';
    } catch (error) {
      swalError(error);
    }
  };

  const getChatAllUserHandler = async () => {
    try {
      fromUserId.value = user.users._id;
      const { data } = await apiAuth.post('/chat/users', {
        fromUserId: fromUserId.value,
      });
      chatUserList.value = data.result;
      chatUserList.value.forEach((item) => {
        item.image =
          item.image ||
          `https://source.boringavatars.com/beam/256/${item.name}?colors=ffabab,ffdaab,ddffab,abe4ff,d9abff`;
      });
      chatUserList.value.forEach((item, index) => {
        const blackIndex = item.black.findIndex(
          (black) => black === user.users._id
        );
        if (blackIndex !== -1) {
          chatUserList.value.splice(index, 1);
        }
      });
    } catch (error) {
      swalError(error);
    }
  };

  return {
    showChat,
    showList,
    toUser,
    chatUserList,
    message,
    messages,
    socket,
    listUser,
    addChatUserHandler,
    sendChatHandler,
    getChatAllUserHandler,
  };
});
