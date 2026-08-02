
"use client";



type Student = {
    fullName: string;
    phoneNumber: string;
    studyYear: string;
    university: string;
};
type Props = {
    student: Student;
};


export default function StudentInfo({
    student,
}: Props) {

    return (
        <section
            className="
       
    h-auto lg:h-full
    bg-white
    rounded-2xl
    border
    border-slate-200
    overflow-hidden
    shadow-sm
   
      "
        >
            {/* ================= Header ================= */}

            <div
                className="

    flex
    relative
    lg:h-44
    flex-col
    items-start
    p-3 md:px-5
    rounded-t-2xl
   bg-[#1e3a6d]
    lg:pb-16
 
        "
            >


                {/* Name */}

                <h2
                    className="
            lg:mt-5
            text-[28px]
            font-bold
            text-white
          "
                >
                    {student.fullName}
                </h2>

                {/* Subtitle */}

                <p
                    className="
            mt-1
            text-sm
            text-slate-400
          "
                >
                    طالب طب الأسنان
                </p>
            </div>

            {/* ================= Information ================= */}

            <div className="p-3 lg:p-5 flex flex-col gap-1">

                <InfoItem
                    title="الاسم الكامل"
                    value={student.fullName}
                />

                <InfoItem
                    title="رقم الهاتف"
                    value={student.phoneNumber}
                />
                <InfoItem
                    title="السنة الدراسية"
                    value={student.studyYear}
                />

                <InfoItem
                    title="الجامعة"
                    value={student.university}
                />

            </div>
        </section>
    );
}

type InfoItemProps = {
    title: string;
    value: string;
};

function InfoItem({
    title,
    value,
}: InfoItemProps) {
    return (
        <div
            className="
            w-max
        border-b
        border-slate-100
        lg:py-5

        last:border-none
      "
        >
            <p
                className="
          text-base lg:text-lg
           font-semibold
         text-[#1e3a6d]
        "
            >
                {title}
            </p>

            <h3
                className="
          lg:mt-2
          
         
          text-sm lg:text-base  
         text-slate-500
         
        "
            >
                {value}
            </h3>
        </div>
    );
}