function getPostInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data Received");
    }, 2000);
  });
}

function getCommentInfo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post data received");
    }, 2000);
  });
}

async function getBlogData() {
  try {
    console.log("Getting blog data");

    // let postData = await getPostInfo();
    // let commentData = await getCommentInfo();
    //  console.log(postData);
    //  console.log(commentData);

    // OR

    const [postData, commentData] = await Promise.all([
      getPostInfo,
      getCommentInfo,
    ]);

    postData;
    commentData;

    console.log("Fetching Complete");
  } catch (error) {
    console.error("Cannot fetch Data", error);
  }
}

getBlogData();
