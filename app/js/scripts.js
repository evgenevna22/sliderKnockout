function viewModel() {
    self.urlMin = "../img/imageMin/";
    self.urlBig = "../img/imageBig/";
    self.pics = [
        {
            nameImg: "pic1.jpg",
            title: "Picture 1",
            alt: "desc for pic 1"
        },
        {
            nameImg: "pic2.jpg",
            title: "Picture 2",
            alt: "desc for pic 2"
        },
        {
            nameImg: "pic3.jpg",
            title: "Picture 3",
            alt: "desc for pic 3"
        },
        {
            nameImg: "pic4.jpg",
            title: "Picture 4",
            alt: "desc for pic 4"
        },
        {
            nameImg: "pic5.jpg",
            title: "Picture 5",
            alt: "desc for pic 5"
        },
        {
            nameImg: "pic6.jpg",
            title: "Picture 6",
            alt: "desc for pic 6"
        },
        {
            nameImg: "pic7.jpg",
            title: "Picture 7",
            alt: "desc for pic 7"
        },
        {
            nameImg: "pic8.jpg",
            title: "Picture 8",
            alt: "desc for pic 8"
        },
        {
            nameImg: "pic9.jpg",
            title: "Picture 9",
            alt: "desc for pic 9"
        },
        {
            nameImg: "pic10.jpg",
            title: "Picture 10",
            alt: "desc for pic 10"
        }
    ];
    self.curIndex = ko.observable(0);
    self.curImg = ko.observable(self.pics[curIndex()]);

    self.prevItem = function () {
        self.curIndex(self.curIndex() - 1);
        self.curImg(self.pics[curIndex()]);
    };

    self.chooseItem = function (index, data) {
        self.curIndex(index);
        self.curImg(data);
    }

    self.nextItem = function (index) {
        self.curIndex(self.curIndex() + 1);
        self.curImg(self.pics[curIndex()]);
    };
    self.offset = ko.computed(function () {
       return -85 * curIndex() + "px";
    });

}
ko.applyBindings(viewModel());