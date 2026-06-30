"use client";

import { useState } from "react";
import { useAdminRequests } from "../hooks/useAdminRequest";
import Pagination from "@/components/CommonApp/Pagination";
import { RequestCard } from "./requestCard";
import { TitleSectionCommon } from "@/components/ui/TitleSectionCommon";
import { useTranslations } from "next-intl";
import { CaseRequest } from "../type/request";
import DeleteConfirmModal from "../../ui/DeleteModel";
import PatientInfoModal from "./PatientInfoModal";

const PAGE_SIZE = 3;

export default function RequestsPage() {
    const [showPatientModal, setShowPatientModal] =
  useState(false);
    const [selectedRequest, setSelectedRequest] =
  useState<CaseRequest | null>(null);

const [showDeleteModal, setShowDeleteModal] =
  useState(false);
function handleReject() {
  if (!selectedRequest) return;

  console.log(selectedRequest.id);

  setShowDeleteModal(false);
  setSelectedRequest(null);
}
      const t = useTranslations("admiNotFiction");
    
  const [page, setPage] = useState(1);

  const {
    data,
    isLoading,
    isError,
  } = useAdminRequests({
    page,
    pageSize: PAGE_SIZE,
  });

  const totalPages = data
    ? Math.ceil(data.total / PAGE_SIZE)
    : 1;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div className="">
        <TitleSectionCommon
            title={t("title")}
            subtitle={t("p1")}
            classA="text-[clamp(1.7rem,6vw,2.2rem)]"
            className2="
              text-dnv-muted
              text-[clamp(0.95rem,3vw,1.15rem)]
              leading-8
            "
          />

      {/* الطلبات */}
<div className="space-y-2 mt-2">
  {data?.items.map((request) => (
<RequestCard
  key={request.id}
  request={request}
  onContact={() => {
    setSelectedRequest(request);
    setShowPatientModal(true);
  }}
  onReject={() => {
    setSelectedRequest(request);
    setShowDeleteModal(true);
  }}
/>
  ))}
</div>

{totalPages > 1 && (
  <div className="">
    <Pagination
      currentPage={page}
      totalPages={totalPages}
      onPageChange={setPage}
    />
  </div>
)}
{showPatientModal && selectedRequest && (
  <PatientInfoModal
    request={selectedRequest}
    onClose={() => {
      setShowPatientModal(false);
      setSelectedRequest(null);
    }}
  />
)}
{showDeleteModal && (
  <DeleteConfirmModal
    onClose={() => {
      setShowDeleteModal(false);
      setSelectedRequest(null);
    }}
    onConfirm={handleReject}
  />
)}
    </div>
  );
}