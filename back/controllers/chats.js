import charts from '../models/chats.js';

const showError = (error, res) => {
  if (error.name === 'ValidationError') {
    res
      .status(400)
      .json({ success: false, message: error.errors[Object.keys(error.errors)[0]].message });
  } else if (error.code === 11000) {
    res.status(400).json({ success: false, message: '重複' });
  } else {
    res.status(500).json({ success: false, message: '未知錯誤' });
  }
};

export const createChat = async (req, res) => {
  try {
    const { fromUserId, toUserId, message } = req.body;
    const data = await charts.create({
      fromUserId,
      toUserId,
      message,
    });

    if (data) {
      res.status(200).json({
        success: true,
        message: '',
        result: data,
      });
    } else {
      res.status(404).json({
        success: false,
        message: '失敗',
      });
    }
  } catch (error) {
    showError(error, res);
  }
};

export const getAllChat = async (req, res) => {
  try {
    const { fromUserId, toUserId } = req.body;

    const chats = await charts
      .find({
        $or: [
          { fromUserId: fromUserId, toUserId: toUserId },
          { fromUserId: toUserId, toUserId: fromUserId },
        ],
      })
      .sort({ createDate: 1 });

    const projectChat = chats.map((msg) => {
      return {
        fromSelf: msg.fromUserId.toString() === fromUserId,
        message: msg.message,
      };
    });

    res.status(200).json({
      success: true,
      message: '',
      result: projectChat,
    });
  } catch (error) {
    showError(error, res);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const result = await charts
      .find({
        $or: [{ fromUserId: req.body.fromUserId }, { toUserId: req.body.fromUserId }],
      })
      .select('toUserId')
      .populate('toUserId', '_id name image black')
      .populate('fromUserId', '_id name image black');

    const newResult = [];

    result.forEach((item) => {
      const toIndex = newResult.findIndex(
        (user) => user.userId.toString() === item.toUserId._id.toString(),
      );

      if (toIndex === -1) {
        newResult.push({
          userId: item.toUserId._id,
          name: item.toUserId.name || '',
          image: item.toUserId.image || '',
          black: item.toUserId.black || [],
        });
      }
      const fromIndex = newResult.findIndex((user) => {
        return user.userId.toString() === item.fromUserId._id.toString();
      });
      if (fromIndex === -1) {
        newResult.push({
          userId: item.fromUserId._id,
          name: item.fromUserId.name || '',
          image: item.fromUserId.image || '',
          black: item.fromUserId.black || [],
        });
      }
    });

    res.status(200).json({
      success: true,
      message: '',
      result: newResult.filter((item) => item.userId.toString() !== req.user._id.toString()),
    });
  } catch (error) {
    showError(error, res);
  }
};
