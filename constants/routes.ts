const ROUTES = {
  HOME: "/",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  QUESTION: "/question",
  ASK_QUESTION: "/ask-question",
  PROFILE: (id: string) => `/question/${id}`,
  TAGS: (id: string) => `/tags/${id}`,
};

export default ROUTES;
