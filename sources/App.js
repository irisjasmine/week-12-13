function App() {}

//when app is on init
//Create article item
//Create article list that uses an article item
//Create article modal to enable create/edit article
App.prototype.init = async function () {
  const ArticleItem = new ArticleItemView();
  const ArticleList = new ArticleListView(ArticleItem);
  console.log(ArticleList);
  const createArticleElement = document.querySelector("#create-new-article");

  const onSubmit = (title, description) => {
    console.log("clicked on modal submit button");
    ArticleList.model.createNewArticle({
      title,
      description,
    });
  };
  const BaseModal = new Modal(onSubmit, "Create new article", "Create");
  await new ArticleModalView(BaseModal);
  createArticleElement.addEventListener("click", () => {
    BaseModal.show();
  });
};
