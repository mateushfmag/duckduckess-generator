import axios from "axios";

export const request = async (body) => {
  const result = await axios
    .post(
      `https://www.tumblr.com/customize_api/blog/duckduckess/pages`,
      {
        method: "update",
        uri: "%2Flivros",
        type: "standard_layout",
        request_uri: "/livros",
        native_uri: false,
        label: "",
        show_link: true,
        title: "Livros",
        body,
        redirect_to: "",
        id: "%2Flivros",
        sort_order: 0,
        user_form_key: "Qf0pCpHpNWWim8p9msmhwoa1Co0",
        secure_form_key: "!331727547277521|eCFYGppmnMWF6LNsXEB7YxONX4",
      },
      {
        headers: {
          accept: "application/json, text/javascript, */*; q=0.01",
          "accept-language": "en-US,en;q=0.9",
          "content-type": "application/json",
          priority: "u=1, i",
          "sec-ch-ua":
            '"Chromium";v="128", "Not;A=Brand";v="24", "Opera";v="114"',
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": '"Linux"',
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-origin",
          "x-requested-with": "XMLHttpRequest",
        },
      }
    )
    .catch((err) => {
      console.log(err.response.data);
      throw err;
    });
  return result;
};
