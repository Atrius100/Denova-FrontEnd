"use client";




import { useState }
    from "react";
import { DashboardActions } from "../../../../features/reception/ui/DashboardActions";
import { StatsGrid } from "../../../../features/reception/ui/StatsGrid";
import PatientFormModal from "@/features/reception/ui/AddPation";


export default function page() {

    const [openModal, setOpenModal] =
        useState(false);

    return (
        <div className="space-y-6">

            <DashboardActions
                onAddPatient={() =>
                    setOpenModal(true)
                }
            />

            <StatsGrid />

            {openModal && (
                <PatientFormModal
                    onClose={() =>
                        setOpenModal(false)
                    }
                />
            )}
        </div>
    );
}