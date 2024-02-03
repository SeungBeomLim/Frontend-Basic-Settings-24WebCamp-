import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import fullHeart from "../icon/fullHeart.png";
import heart from "../icon/heart.png";

const profiles = {
  u_id: 1,
  u_name: "official_HGU",
  u_image:
    "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNjEwMjhfODUg%2FMDAxNDc3NjMxMTU0MjE0.Wd9YTKO1hXyARMRN-TiXTYg7lvXR7BXcbXJrD1o5Hs4g.q3zoQAYbcTfedCip1xrEV3801twVecdXErni0xAnFacg.PNG.spot_academy%2Flogo.PNG&type=sc960_832",
  u_text:
    "This is the official Instagram account for Handong Global University",
};

const dummy_comments = [
  {
    text: "한동에 봄이 더 빨리 오길 바라며",
    username: "official_HGU",
    image:
      "https://encrypted-tbn0.gstatic.com/p_images?q=tbn:ANd9GcRIMF36D7fGoiY4yFSKoVNnN-hm21j1TDAlpA&usqp=CAU",
  },
  {
    text: "한동인에게 듣는 한동인 이야기",
    username: "official_HGU",
    image:
      "https://encrypted-tbn0.gstatic.com/p_images?q=tbn:ANd9GcQqKTQEdvPq-Nh5KZFrRfvgTClJetQB_Do68w&usqp=CAU",
  },
];

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    display: "flex",
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  height: "auto",
  maxWidth: "100%",
}));

const LeftContent = styled("div")({
  flex: "0 0 50%", // Take up 50% of the width
});

const RightContent = styled("div")({
  flex: "0 0 50%", // Take up 50% of the width
  paddingLeft: "16px", // Add some spacing between left and right content
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

const UserInformation = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "16px",
  fontWeight: "bold",
});

const UserImage = styled("img")({
  width: "32px",
  height: "32px",
  marginRight: "8px",
  borderRadius: "50%", // Add border-radius for a circular shape
});

const PostImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const HeartImg = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

/*
const pool = require('./db'); db.js 파일을 만든다면, 여기에서 만든 mariadb 연결 객체 불러오기
<db.js>
const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: 'your_host',
  user: 'your_user',
  password: 'your_password',
  database: 'your_database',
  connectionLimit: 5,
});

module.exports = pool;
*/

const Row = styled("div")({
  width: "100%",
  display: "grid",
  gridTemplateColumns: "1fr 5fr",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "8px",
});

export default function PostDialog({ open, onClose, post }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    // if (pool) {
    //   fetchCommentsFromDatabase(post.p_id);
    // } else {
    //   setComments(dummy_comments);
    // }
  }, [post]);

  const fetchCommentsFromDatabase = async (postId) => {
    try {
      // if (pool) {
      //   const connection = await pool.getConnection();
      //   const [rows] = await connection.query(
      //     "SELECT * FROM comments WHERE post_id = ?",
      //     [postId]
      //   );
      //   connection.release();
      //   setComments(rows);
      // }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  const addComment = async () => {
    try {
      // if (pool && newComment.trim() !== "") {
      //   const connection = await pool.getConnection();
      //   await connection.query(
      //     "INSERT INTO comments (post_id, text, username, image) VALUES (?, ?, ?, ?)",
      //     [
      //       post.p_id,
      //       newComment,
      //       "c_id", // 변경 필요
      //       "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/67836763_542983346542742_576946324126040064_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=7f8c78&_nc_ohc=kFamEBZEbR4AX-Bunxe&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDlaxZTI8Ov2gKBrDknug0GK1x6RWmiQNXX3BGuhAVCag&oe=65D476F3",
      //     ]
      //   );
      //   connection.release();
      //   fetchCommentsFromDatabase(post.p_id);
      //   setNewComment("");
      // }
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  const deleteComment = async (commentIndex) => {
    try {
      // const connection = await pool.getConnection();
      // await connection.query("DELETE FROM comments WHERE comment_id = ?", [
      //   comments[commentIndex].comment_id,
      // ]);
      // connection.release();

      fetchCommentsFromDatabase(post.p_id);
    } catch (error) {
      console.error("Error deleting comment:", error);
    }
  };

  const cdHeart = function (e) {
    if (e.target.getAttribute("src") == heart) {
      e.target.setAttribute("src", fullHeart);
    } else if (e.target.getAttribute("src") == fullHeart) {
      e.target.setAttribute("src", heart);
    }
  };

  return (
    <>
      {/* 스타일드 다이얼로그 컴포넌트 */}
      <BootstrapDialog
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="md"
      >
        {/* 다이얼로그 상단의 닫기 버튼 */}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>

        {/* 다이얼로그 내용 */}
        <DialogContent dividers>
          <div style={{ display: "flex" }}>
            <LeftContent>
              {/* 포스트의 이미지 표시 */}
              <PostImg
                src={post.p_image}
                alt={post?.p_text}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </LeftContent>

            <RightContent>
              {/* 이용자 */}
              <div>
                <UserInformation>
                  <UserImage src={profiles.u_image} alt={profiles.u_name} />
                  <DialogTitle sx={{ m: 0, p: 0 }}>{post.p_text}</DialogTitle>
                </UserInformation>
                <hr />
                <div style={{ display: "flex", alignItems: "center" }}>
                  {/* 포스트 한 사람의 정보, 캡션*/}
                  <UserInformation>
                    <UserImage src={profiles.u_image} alt={profiles?.u_name} />
                    {profiles?.u_name}
                  </UserInformation>
                  <div style={{ marginLeft: "8px" }}>{profiles?.u_text}</div>
                </div>

                {/* 댓글단 사람의 정보, 댓글 내용 */}
                {/* <div style={{ display: "flex", alignItems: "center" }}> */}
                {/* 댓글단 사람 정보 */}
                {/* <UserInformation>
                <UserImage src={post?.c_image} alt={post?.c_id} />
                {post?.c_id}
              </UserInformation> */}
                {/* 댓글 내용 */}
                {/* <div style={{ marginLeft: "8px" }}>{post?.c_comment}</div>
            </div> */}
                <ul>
                  {comments.map((comment, index) => (
                    <li key={index}>
                      <UserImage src={comment.image} alt={comment.username} />
                      <span>{comment.text}</span>
                      <Button onClick={() => deleteComment(index)}>삭제</Button>
                    </li>
                  ))}
                </ul>
                <hr />
              </div>
              {/* 좋아요 버튼 */}
              <Row>
                <div style={{ width: "50px" }}>
                  <HeartImg
                    src={heart}
                    style={{ width: "30px", height: "auto" }}
                    onClick={cdHeart}
                  />
                </div>
                {/* <hr/> */}
                {/* 다이얼로그 하단의 액션 버튼 */}
                <DialogActions
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingRight: "16px",
                  }}
                >
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="댓글 달기..."
                    style={{ flex: "1", marginRight: "8px", width: "100%" }}
                  />
                  <Button onClick={addComment}>게시</Button>
                </DialogActions>
              </Row>
            </RightContent>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </>
  );
}
