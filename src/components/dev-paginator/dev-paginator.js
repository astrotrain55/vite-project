export default (selector) => {
  const pages = [
    {
      "title": "Главная страница",
      "link": "index",
    },
    {
      "title": "Внутренняя страница",
      "link": "02",
    },
  ];
  const menu = pages.reduce((total, item, index) => (
    total += `
      <li>
        <a href="${item.link}.html">
          ${index + 1}. ${item.title}
        </a>
      </li>`
  ), '');

  document.querySelector(selector).innerHTML = `
    <div type="x-widget-template">
      <ul>${menu}</ul>
    </div>`;
};
