function AboutUs() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-500 to-purple-500 p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
            <img
                src="https://ess.ksu.ac.th/KSU/s1500/WebForm/GetPicture.aspx?StudentNo=651540005001-0&dummy=25670903161615"
                alt="Profile"
                className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">นาย ปัณณวิชญ์ โคตรบรรเทา</h1>
            <p className="text-gray-600 mb-4">เรียนที่ วิศวะคอมพิวเตอร์ มหาวิทยาลัยกาฬสินธุ์</p>
            <p className="text-gray-600">
                เสียเหงื่อไห้การกีฬาดีกว่าเสียน้ำตาไห้กับคนหลายใจ.
            </p>
            <div className="mt-6">
                <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-800 font-semibold"
                >
                    View Projects
                </a>
            </div>
        </div>
    </div>
    );
}
export default AboutUs