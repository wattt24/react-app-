import { useState } from 'react';
import profileImage from '../image/am.JPG'; // นำเข้าภาพแรก
import newImage from '../image/am2.JPG'; // นำเข้าภาพที่สอง

function AboutUs() {
    const [imageSrc, setImageSrc] = useState(profileImage); // กำหนดภาพเริ่มต้นเป็นภาพแรก

    const changeImage = () => {
        setImageSrc(newImage); // เปลี่ยนภาพเมื่อกดปุ่มเป็นภาพใหม่
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-8">
            <div className="bg-white rounded-2xl shadow-xl p-10 max-w-lg w-full">
                <div className="flex flex-col items-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">นางสาวกิตติภรณ์ คำนาดี</h1>
                    <p className="text-sm text-gray-600 mb-4">วิศวกรรมคอมพิวเตอร์ มหาวิทยาลัยกาฬสินธุ์</p>
                    <p className="text-gray-500 italic text-center">
                        "เสียเหงื่อให้กับการกีฬา ดีกว่าเสียน้ำตาให้กับคนหลายใจ."
                    </p>
                    
                    {/* แสดงภาพที่เลือก */}
                    <img id="myImage" src={imageSrc} alt="Profile" className="rounded-full w-32 h-32 mt-4" />

                    {/* ปุ่มสำหรับเปลี่ยนภาพ */}
                    <button
                        onClick={changeImage}
                        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
                    >
                        เปลี่ยนภาพ
                    </button>
                </div>

                <div className="mt-8">
                    <h2 className="text-xl font-semibold text-gray-700 text-center mb-4">Projects</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <a href="#" className="block bg-indigo-500 text-white rounded-lg py-2 text-center shadow-md hover:bg-indigo-600 transition">
                            Project 1
                        </a>
                        <a href="#" className="block bg-purple-500 text-white rounded-lg py-2 text-center shadow-md hover:bg-purple-600 transition">
                            Project 2
                        </a>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <a href="#" className="text-blue-500 hover:underline">See more projects</a>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
