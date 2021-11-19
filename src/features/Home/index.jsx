import Banner from "./components/Banner";
import ListProduct from "./components/ListProduct";
import LiveProduct from "./components/LiveProduct";
import Slider from "./components/Slider";

function Home(props) {
  const data = [
    {
      id: 2655,
      linkBanner: "https://scj.vn/images/campaign/main_2655_en_1637254145.jpg",
      items: [
        {
          id: 1,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/45/161545L7.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 2,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/15/161615L4.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 3,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/71/161671L5.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 4,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/46/161746L2.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 5,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/74/158674L6.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 6,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/78/161578L3.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
      ],
    },
    {
      id: 2882,
      linkBanner: "https://scj.vn/images/campaign/main_2882_en_1636170529.jpg",
      items: [
        {
          id: 1,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/94/161694L3.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 2,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/83/161483L3.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 3,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/30/160930L3.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 4,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/09/160909L4.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 5,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/33/161633L3.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 6,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/31/161631L4.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
      ],
    },
    {
      id: 2883,
      linkBanner: "https://scj.vn/images/campaign/main_2883_en_1636170541.jpg",
      items: [
        {
          id: 1,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/84/161684L7.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 2,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/21/161521L3.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 3,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/82/161482L3.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 4,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/76/161276L2.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 5,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/14/160414L2.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 6,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/71/159971L2.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
      ],
    },
    {
      id: 2506,
      linkBanner: "https://scj.vn/images/campaign/main_2506_en_1636170671.jpg",
      items: [
        {
          id: 1,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/29/161629L2.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 2,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/71/161671L5.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 3,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/14/161414L2.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 4,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/76/161476L4.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 5,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/51/161451L4.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
        {
          id: 6,
          name: "EvernestSpecial_9 HộpYến Sào TN Đườn Phèn BS Canxi+5 Hộp yến Sào TN NhânSâm",
          linkImg: "https://image.scj.vn/item_images/59/160359L3.jpg",
          salePrice: "1.390.000đ",
          price: "1.490.000đ",
          percent: "7",
        },
      ],
    },
    // {
    //   id: "2516",
    //   linkBanner: "https://scj.vn/images/campaign/main_2516_en_1637254134.jpg",
    // },
    // {
    //   id: "2882",
    //   linkBanner: "https://scj.vn/images/campaign/main_2882_en_1636170529.jpg",
    // },
    // {
    //   id: "2883",
    //   linkBanner: "https://scj.vn/images/campaign/main_2883_en_1636170541.jpg",
    // },
    // {
    //   id: "2506",
    //   linkBanner: "https://scj.vn/images/campaign/main_2506_en_1636170671.jpg",
    // },
    // {
    //   id: "2884",
    //   linkBanner: "https://scj.vn/images/campaign/main_2884_en_1637309442.jpg",
    // },
    // {
    //   id: "2885",
    //   linkBanner: "https://scj.vn/images/campaign/main_2885_en_1636170567.jpg",
    // },
    // {
    //   id: "2606",
    //   linkBanner: "https://scj.vn/images/campaign/main_2606_en_1636170712.jpg",
    // },
    // {
    //   id: "2533",
    //   linkBanner: "https://scj.vn/images/campaign/main_2533_en_1636170744.jpg",
    // },
  ];

  return (
    <>
      <Slider />
      <LiveProduct />
      <Banner />
      <ListProduct data={data} />
    </>
  );
}

export default Home;
