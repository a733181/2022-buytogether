import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { Server } from 'socket.io';
import userRoute from './routes/users.js';
import productRouter from './routes/products.js';
import orderRouter from './routes/orders.js';
import messageRouter from './routes/messages.js';
import contactRouter from './routes/contacts.js';
import reportRouter from './routes/reports.js';
import chatRouter from './routes/chats.js';

import './passport/passport.js';

mongoose.connect(process.env.DB_URL);
mongoose.set('sanitizeFilter', true);

const app = express();

const corsSet = {
  origin(origin, callback) {
    if (origin.includes('github') || origin.includes('localhost') || origin.includes('127.0.0.1')) {
      callback(null, true);
    } else {
      callback(new Error(), false);
    }
  },
  credentials: true,
};

// 跨域請求設定
app.use(cors(corsSet));

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(403).json({ success: false, message: '請求被拒' });
});

app.use(express.json());

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  res.status(400).json({ success: false, message: '格式錯誤' });
});

app.use('/users', userRoute);
app.use('/products', productRouter);
app.use('/orders', orderRouter);
app.use('/messages', messageRouter);
app.use('/contacts', contactRouter);
app.use('/reports', reportRouter);
app.use('/chat', chatRouter);

app.all('*', (req, res) => {
  res.status(400).json({ success: false, message: '找不到' });
});

const server = app.listen(process.env.PORT || 4000, () => {
  console.log('Server started');
});

const io = new Server(server, {
  cors: {
    origin: '*',
  },
  allowRequest: (req, cb) => {
    const isAllowed =
      req.headers.header === 'socket' &&
      (req.headers.origin.includes('github') ||
        req.headers.origin.includes('localhost') ||
        req.headers.origin.includes('127.0.0.1'));
    cb(null, isAllowed);
  },
});

global.onlineUsers = new Map();

io.on('connection', (socket) => {
  global.chatSocket = socket;

  socket.on('add-user', (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on('send-msg', (data) => {
    const sendUserSocket = onlineUsers.get(data.toUserId);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('msg-recieve', data.message);
    }
  });
  socket.on('show-user', (data) => {
    const sendUserSocket = onlineUsers.get(data.toUserId);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit('show-user', data);
    }
  });
});
