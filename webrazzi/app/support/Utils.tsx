import dayjs from "dayjs";
require("dayjs/locale/tr");

const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs.locale("tr");

const API_URL = "https://webrazzi.com/api/v2/posts";

const getRandomInt = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const numberFormat = (num: number) => Intl.NumberFormat("tr-TR").format(num);

const fromNow = (date: string) => dayjs(date).fromNow();

const months = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık"
];

const formatDate = (date: string) => {
  const convertedDate = new Date(date);

  return `${date.substring(8, 10)} ${
    months[convertedDate.getMonth()]
  } ${convertedDate.getFullYear()}, ${date.substring(11, 16)}`;
};

const searchText = (text: string) => {
  text = text.replace(/ç/g, "c");
  text = text.replace(/ı/g, "i");
  text = text.replace(/ü/g, "u");
  text = text.replace(/ğ/g, "g");
  text = text.replace(/ö/g, "o");
  text = text.replace(/ş/g, "s");
  return text;
};

const writeCategories = (categories: Array<{ title: string; id: number }>) =>
  categories
    .map(category => category.title)
    .join(", ")
    .toLocaleUpperCase("tr-TR");

interface ThumbnailProps {
  url: string;
  width: number;
  height: number;
}

export interface PostsProps {
  id: number;
  type: "string";
  insights: boolean;
  url: string;
  title: string;
  excerpt: string;
  published_at: string;
  modified_at: string;
  categories: Array<{ title: string; id: number }>;
  tags: Array<{ title: string; id: number }>;
  author: { id: number; username: string; full_name: string; avatar: string };
  interaction: { bookmarked: boolean; liked: boolean };
  comment_count: number;
  comment_enabled: boolean;
  is_advertorial: boolean;
  is_guest_author: boolean;
  thumbnails: {
    full: ThumbnailProps;
    "size-xs": ThumbnailProps;
    "size-sm": ThumbnailProps;
    "size-md": ThumbnailProps;
    "size-lg": ThumbnailProps;
  };
}

export interface PostProps extends PostsProps {
  insights_access: boolean;
  content: string;
  summary: string;
}

export {
  API_URL,
  getRandomInt,
  numberFormat,
  fromNow,
  formatDate,
  searchText,
  writeCategories
};
