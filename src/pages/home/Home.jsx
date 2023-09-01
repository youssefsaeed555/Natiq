import React from "react";
import style from "./home.module.css";
import ai from "../../assets/images/ai2.jpg";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1 className={`${style.heading}`}>مرحبا بك في نَاطِقٌ</h1>
      <div className="container">
        <p className={` ${style.paragraph}`}>
          يتيح لك هذا التطبيق تحويل النص العربي إلى كلام. يمكنك إدخال نص باللغة
          العربية وسيقوم التطبيق بنطقه لك بصوت إلكتروني. سيتم تكرار الكلمة
          الأخيرة ثلاث مرات من أجل الوضوح. يمكن أن تكون خدمة تحويل النص إلى كلام
          باللغة العربية أداة قيمة لمختلف التطبيقات، استمع إلى النص المنطوق وقم
          بتجربة عبارات مختلفة الآن!
        </p>
      </div>
      <div className={`${style.mainSection}`}>
        <div className={`${style.content}`}>
          <div className="text">
            <h2>تحويل النص إلى صوت</h2>
            <p>يقرأ ناطق النص بصوت عالٍ بنقرة زر واحدة</p>
          </div>
          <Link className={`${style.visit}`} to="/natiq">
            جرب نَاطِقٌ
            <i className="fas fa-long-arrow-alt-left"></i>
          </Link>
        </div>
        <img src={ai} />
      </div>
    </div>
  );
}

export default Home;
