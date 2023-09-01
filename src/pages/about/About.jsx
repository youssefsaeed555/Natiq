import React from "react";
import style from "./about.module.css";

function About() {
  return (
    <div className={`${style.aboutPage}`}>
      <h1 className={`${style.heading}`}>ماذا عن نَاطِقٌ</h1>
      <div className="container">
        <p className={`${style.paragraph}`}>
          ناطق هي خدمة تتيح للمستخدم كتابة نص باللغة العربية. ومن ثم قم بنطق هذا
          الصوت بصوت إلكتروني، وسوف ينطق أيضًا الكلمة الأخيرة 3 مرات، مما يؤدي
          إلى إنشاء صدى. بإمكان المستخدم تحويل النصوص العربي إلى كلام منطوق
          بأصوات طبيعية .
        </p>
        <h2 className={`${style.specifies}`}>مميزات ناطق</h2>
        <div className={`${style.boxes}`}>
          <div className={`${style.box}`}>
            <i className="fa-solid fa-a"></i>
            <h3>دعم اللغه العربيه</h3>
            <p>
              كتابة نص باللغة العربية. ومن ثم قم بنطق هذا الصوت بصوت إلكتروني
            </p>
          </div>
          <div className={`${style.box}`}>
            <i className="fa-solid fa-check"></i>
            <h3>دقه عاليه</h3>
            <p>
              يقرأ ناطق النص بصوت عالٍ بنقرة زر واحدة. يمكن للمستخدمين توفير
              الوقت والجهد من خلال واجهة ناطق سهلة الاستخدام.
            </p>
          </div>
          <div className={`${style.box}`}>
            <i className="fa-solid fa-music"></i>
            <h3>صوت طبيعي </h3>
            <p>
              يقوم ناطق بنطق الجمله اللتي تريدها مع تكرار اخر كلمه 3 مرات مما
              يؤدي الي احساس بصدي صوت
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
