import livros from "./livros.json" with {type: "json"};

const tumblrUrl = "https://duckduckess.tumblr.com";

const Title = ({ content }) => `<h1 class="duckduck-title">${content}</h1>`;

const Scaffold = ({ content }) => `<div class="scaffold">${content}</div>`;

const BookTitle = ({ content }) => `<div class="book-title">${content}</div>`;

const Link = ({ content, tag }) =>
  `<a href="${tumblrUrl}/tagged/${tag}" target="_blank">${content}</a>`;

const Image = ({ tag, url }) =>
  `<p>${Link({
    content: `<img class="book-image" src="${url}" />`,
    tag,
  })}</p>`;

export const build = () => {
  let page = `${Title({content: `Finalizados`})}`;

  const mount = (livro) => {
    page += Scaffold({
      content: `
                        ${BookTitle({
                          content: Link({
                            content: livro.name,
                            tag: livro.tag,
                          }),
                        })}
                        ${Image({
                          tag: livro.tag,
                          url: livro.image,
                        })}
                    `.trim(),
    });
  };

  livros.finalizados.forEach(mount);

  page += `${Title({content: `Em Progresso`})}`;

  livros["em-progresso"].forEach(mount);
  return page
};
