const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "Lorem ipsum 1",
    user_id: 6,
    post_id: 1,
  },
  {
    comment_text: "Lorem ipsum 2",
    user_id: 6,
    post_id: 8,
  },
  {
    comment_text: "Lorem ipsum 3 ",
    user_id: 3,
    post_id: 10,
  },
  {
    comment_text: "Lorem ipsum 4 ",
    user_id: 3,
    post_id: 18,
  },
  {
    comment_text: "Lorem ipsum 5",
    user_id: 7,
    post_id: 5,
  },
  {
    comment_text: "Lorem ipsum 6",
    user_id: 1,
    post_id: 20,
  },
  {
    comment_text: "Lorem ipsum 7",
    user_id: 6,
    post_id: 7,
  },
  {
    comment_text: "Lorem ipsum 8",
    user_id: 7,
    post_id: 4,
  },
  {
    comment_text: "Lorem ipsum 9",
    user_id: 6,
    post_id: 12,
  },
  {
    comment_text: "Lorem ipsum 10",
    user_id: 6,
    post_id: 20,
  },
  {
    comment_text: "Lorem ipsum 11",
    user_id: 3,
    post_id: 14,
  },
  {
    comment_text: "Lorem ipsum 12",
    user_id: 5,
    post_id: 4,
  },
  {
    comment_text: "Lorem ipsum 13",
    user_id: 4,
    post_id: 9,
  },
  {
    comment_text: "Lorem ipsum 14",
    user_id: 5,
    post_id: 14,
  },
  {
    comment_text: "Lorem ipsum 15",
    user_id: 6,
    post_id: 2,
  },
  {
    comment_text: "Lorem ipsum 16",
    user_id: 8,
    post_id: 2,
  },
  {
    comment_text: "Lorem ipsum 17",
    user_id: 2,
    post_id: 20,
  },
  {
    comment_text: "Lorem ipsum 18",
    user_id: 4,
    post_id: 11,
  },
  {
    comment_text: "Lorem ipsum 19",
    user_id: 5,
    post_id: 13,
  },
  {
    comment_text: "Lorem ipsum 20",
    user_id: 9,
    post_id: 16,
  },
  {
    comment_text: "Lorem ipsum 21",
    user_id: 6,
    post_id: 4,
  },
  {
    comment_text: "Lorem ipsum 22",
    user_id: 4,
    post_id: 10,
  },
  {
    comment_text: "Lorem ipsum 23",
    user_id: 3,
    post_id: 8,
  },
  {
    comment_text: "Lorem ipsum 24",
    user_id: 8,
    post_id: 10,
  },
  {
    comment_text: "Lorem ipsum 25",
    user_id: 1,
    post_id: 15,
  },
  {
    comment_text: "Lorem ipsum 26",
    user_id: 5,
    post_id: 3,
  },
  {
    comment_text: "Lorem ipsum 27",
    user_id: 1,
    post_id: 15,
  },
  {
    comment_text: "Lorem ipsum 28",
    user_id: 4,
    post_id: 16,
  },
  {
    comment_text: "Lorem ipsum 29",
    user_id: 4,
    post_id: 18,
  },
  {
    comment_text: "Lorem ipsum 30",
    user_id: 4,
    post_id: 10,
  },
  
const commentSeed = () => Comment.bulkCreate(commentdata);

module.exports = commentSeed;