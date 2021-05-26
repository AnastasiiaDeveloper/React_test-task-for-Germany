import axios from "axios";

class postApiUserInfo {
  url = "https://httpbin.org";
  async addPost(data) {
    try {
      return await axios.post(
        `${this.url}/post`,
        { ...data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch {
      console.log("Catch the error");
    }
  }
}
export default new postApiUserInfo();
