import { CaseRequest } from "../type/request";



type Params = {
  page: number;
  pageSize: number;
};

export function useAdminRequests({
  page,
  pageSize,
}: Params) {

const mockRequests: CaseRequest[] = [
  {
    id: "1",
    studentName: "محمد أحمد",
    universityName: "جامعة تشرين",
    caseName: "علاج عصب",
    toothNumber: 36,
    createdAt: "منذ 10 دقائق",
  },
  {
    id: "2",
    studentName: "علي حسن",
    universityName: "جامعة المنارة",
    caseName: "قلع",
    toothNumber: 18,
    createdAt: "منذ ساعة",
  },
  {
    id: "3",
    studentName: "علي حسن",
    universityName: "جامعة المنارة",
    caseName: "قلع",
    toothNumber: 18,
    createdAt: "منذ ساعة",
  },
  {
    id: "4",
    studentName: "علي حسن",
    universityName: "جامعة المنارة",
    caseName: "قلع",
    toothNumber: 18,
    createdAt: "منذ ساعة",
  },
  {
    id: "5",
    studentName: "علي حسن",
    universityName: "جامعة المنارة",
    caseName: "قلع",
    toothNumber: 18,
    createdAt: "منذ ساعة",
  },
  {
    id: "6",
    studentName: "علي حسن",
    universityName: "جامعة المنارة",
    caseName: "قلع",
    toothNumber: 18,
    createdAt: "منذ ساعة",
  },
  {
    id: "7",
    studentName: "علي حسن",
    universityName: "جامعة المنارة",
    caseName: "قلع",
    toothNumber: 18,
    createdAt: "منذ ساعة",
  },
  {
    id: "8",
    studentName: "علي حسن",
    universityName: "جامعة المنارة",
    caseName: "قلع",
    toothNumber: 18,
    createdAt: "منذ ساعة",
  },
];
const start = (page - 1) * pageSize;
const end = start + pageSize;

const paginatedItems = mockRequests.slice(start, end);

return {
  data: {
    items: paginatedItems,
    total: mockRequests.length,
  },
  isLoading: false,
  isError: false,
};


}
