import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getPost, getUsers } from "../modules/sample";
import loading from "../modules/loading";
import Sample from "../components/Sample";

const SampleContainer = ({
  getPost,
  getUsers,
  post,
  users,
  loadingPost,
  loadingUsers,
}) => {
  useEffect(() => {
    const fn = async () => {
      try {
        await getPost(1);
        await getUsers();
      } catch (e) {
        console.log(e); //에러조회
      }
    };
    fn();
  }, [getPost, getUsers]);
  return (
    <Sample
      post={post}
      users={users}
      loadingPost={loadingPost}
      loadingUsers={loadingUsers}
    />
  );
};

//연결해주기
export default connect(
  //상태값 조회
  ({ sample }) => ({
    post: sample.post,
    users: sample.users,
    loadingPost: loading["sample/GET_POST"],
    loadingUsers: loading["sample/GET_USERS"],
  }),
  //액션
  {
    getPost,
    getUsers,
  }
)(SampleContainer);
