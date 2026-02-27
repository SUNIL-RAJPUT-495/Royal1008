export const baseURL = "http://localhost:8080";

const SummaryApi = {
  //  User
  register:{
    url:"/api/User/register",
    method:"post"
  },
  verify:{
    url:"/api/User/login",
    method:"post"
  }
,
  // Create User
  CricketLive: {
    url: baseURL + "/api/sports/live",
    method: "get"
  },
  CricketUpcoming: {
    url: baseURL + "/api/sportsRouter/upcoming",
    method: "get"
  },

}

export default SummaryApi;
