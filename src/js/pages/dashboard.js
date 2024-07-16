const Dashboard = {
  async init() {
    const itemsPerPage = 0;
    const totalPage = 0;
    await this.initData();
    this._initialListener();
  },

  async initData() {
    try {
      document.getElementById("storiesContainer").classList.add("d-none");
      const fetchData = await fetch(`/data/DATA.json`);
      const response = await fetchData.json();

      this.data = response.listStory;
      this.itemsPerPage = 9;
      this.currentPage = 1;
      this.totalPage = Math.ceil(this.data.length / this.itemsPerPage);
      this._countStoriesToCard(this.data);
      this._populateStoriesToCard(this.data);

      console.log(this.data);
    } catch (error) {
      console.log(error);
    } finally {
      console.log("Data loaded successfully");
      setTimeout(() => {
        document.getElementById("spinnerLoading").style.display = "none";
        document.getElementById("storiesContainer").classList.remove("d-none");
        this._initPagination();
      }, 500);
    }
  },
  _initialListener() {
    const storyDetailModal = document.getElementById("storyDetailModal");
    storyDetailModal.addEventListener("show.bs.modal", (event) => {
      const modalTitle = storyDetailModal.querySelector(".modal-title");
      modalTitle.focus();

      const card = event.relatedTarget;
      const storyData = this.data.find((item) => {
        return item.id == card.dataset.id;
      });

      this._populateStoriesToModal(storyData);
    });
  },

  _countStoriesToCard(stories = null) {
    if (!(typeof stories === "object")) {
      throw new Error(
        `Parameter stories should be an object. The value is ${stories}`
      );
    }

    if (!Array.isArray(stories)) {
      throw new Error(
        `Parameter stories should be an array. The value is ${stories}`
      );
    }

    let count = 0;

    stories.forEach((story) => {
      count++;
    });

    document.querySelector("#totalStories").textContent = count;
  },

  _populateStoriesToCard(stories = null) {
    if (!(typeof stories === "object")) {
      throw new Error(
        `Parameter stories should be an object. The value is ${stories}`
      );
    }
    const storiesContainer = document.querySelector("#storiesContainer");
    storiesContainer.innerHTML = "";
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const storiesToShow = this.data.slice(start, end);

    storiesToShow.forEach((story) => {
      const cardItem = document.createElement("card-item");
      cardItem.classList.add("col-sm-4", "my-2");
      cardItem.author = story.name;
      cardItem.date = story.createdAt.split("T")[0];
      cardItem.id = story.id;
      storiesContainer.appendChild(cardItem);
    });
  },
  _initPagination() {
    const paginationElement = document.createElement("pagination-component");
    paginationElement.classList.add(
      "justify-content-center",
      "d-flex",
    );
    paginationElement.setAttribute("itemsPerPage", this.itemsPerPage);
    paginationElement.setAttribute("totalItems", this.data.length);
    paginationElement.setAttribute("totalPages", this.totalPage);
    paginationElement.setAttribute("currentPage", this.currentPage);

    const storiesContainer = document.querySelector("#storiesContainer");
    storiesContainer.insertAdjacentElement("afterend", paginationElement);

    paginationElement.addEventListener("page-change", (e) => {
      this.currentPage = e.detail.currentPage;
      this._populateStoriesToCard();
    });
  },

  _populateStoriesToModal(story) {
    const imgDetail = document.querySelector("#imgDetail");
    const dateDetail = document.querySelector("#dateDetail");
    const descDetail = document.querySelector("#descDetail");
    const titleDetail = document.querySelector("#titleDetail");

    imgDetail.setAttribute("src", story.photoUrl);
    imgDetail.setAttribute("alt", story.name);
    titleDetail.textContent = story.name;
    dateDetail.textContent = story.createdAt.split("T")[0];
    descDetail.textContent = story.description;
  },
};

export default Dashboard;
