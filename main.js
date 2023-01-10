import blog, { ga, redirects } from "https://deno.land/x/blog@0.5.0/blog.tsx";

blog({
  title: "Joshua Byrd",
  author: "Joshua Byrd",
  avatar: "./plant.jpg",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:phocks@gmail.com" },
    { title: "GitHub", url: "https://github.com/phocks" },
  ],
  background: "#9ee",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
