import React from 'react';
// import { Link } from 'react-router-dom'; // إذا كان هناك روابط داخلية في المستقبل

function WifiSecurityArticle() {
  return (
    <section className="container">
      <h1 className="page-title">🔐 حماية شبكة الواي فاي!</h1>
      <div className="article-content">
        <hr />
        <h2>🔐 1. غير اسم الشبكة (SSID)</h2>
        <p>أول شي سوّه، لا تخلي اسم الشبكة هو نفسه اللي يجي من الراوتر، زي "STC1234" ولا "Huawei_5G"، غيره لاسم خاص فيك، بس لا تحط فيه معلوماتك.</p>
        <blockquote>
          <strong>مثال:</strong> بدل ما يكون "STC_5G_8493" خله "بيت_أبو_سعود" ولا "واي_فاي_الطايف".
        </blockquote>

        <hr />
        <h2>🔑 2. حط كلمة مرور قوية</h2>
        <p>كلمة السر لازم تكون صعبة، لا تستخدم 123456 ولا اسمك وتاريخ ميلادك.</p>
        <blockquote>
          <strong>خلك ذيب:</strong> حط حروف كبيرة وصغيرة، أرقام ورموز، زي: <span style={{ direction: 'ltr', display: 'inline-block', color: 'var(--accent-green)' }}>`Riy@dh2025!net`</span>
        </blockquote>

        <hr />
        <h2>🔒 3. فعل التشفير القوي (WPA3 أو WPA2)</h2>
        <p>ادخل إعدادات الراوتر، وتأكد إن التشفير شغال على <strong>WPA2</strong> على الأقل، ويفضل <strong>WPA3</strong> لو الراوتر يدعم.</p>
        <blockquote>
          <strong>تحذير:</strong> إذا شفت WEP، عطه شلوت وقفله، لأنه قديم وسهل اختراقه.
        </blockquote>

        <hr />
        <h2>📱 4. طفي WPS</h2>
        <p>ميزة WPS صح إنها تسهّل الاتصال، بس بعد تسهّل على الهاكرز يدخلون، فاقطعها.</p>
        <blockquote>
          ادخل إعدادات الراوتر، دور على WPS و<strong>عطها تعطيل (Disable).</strong>
        </blockquote>

        <hr />
        <h2>📵 5. راقب من داخل الشبكة</h2>
        <p>افتح صفحة الراوتر وشف مين متصل. تلقى جدول فيه كل الأجهزة.</p>
        <blockquote>
          <strong>لو شفت جهاز ما تعرفه؟</strong> خذه بالـ <span style={{ direction: 'ltr', display: 'inline-block' }}>MAC Address</span> وامنعه (Block).
        </blockquote>

        <hr />
        <h2>🧱 6. حدّث الراوتر</h2>
        <p>زي ما تحدث جوالك، الراوتر له تحديثات تسد ثغرات.</p>
        <blockquote>
          ادخل الإعدادات، دور على قسم "Firmware" أو "Software Update" وسوّ له تحديث.
        </blockquote>

        <hr />
        <h2>👻 7. أخفِ اسم الشبكة (اختياري)</h2>
        <p>تقدر تخلي الشبكة ما تطلع للناس، بس هذا ما يمنع المحترفين، يعني مجرد طبقة زيادة.</p>
        <p> ماندري يمكن نسوي شرح عليها بعدين-👻</p>

        <hr />
        <h2>👮‍♂️ 8. قلّل عدد المتصلين</h2>
        <p>بعض الراوترات تقدر تحدد عدد الأجهزة، مثلًا تحط بس 10 أجهزة مسموحة.</p>

        <hr />
        <h2>9. لا تعطي الرقم لأي أحد</h2>
        <p><strong>وهذي اللي سألت عنها بالتحديد:</strong></p>
        <blockquote>
          لا تعطي كلمة السر لكل من جاك، واذا جاك ضيف، سو له شبكة خاصة (Guest network) وخلها بكلمة مرور لحالها.
        </blockquote>

        <hr />
        <h2>💡 طيب، كيف تسوي شبكة خاصة للضيوف (Guest Network)؟</h2>
        <ol>
          <li>
            <strong>ادخل على صفحة الراوتر:</strong>
            <p>تفتح المتصفح وتكتب العنوان هذا:</p>
            <div className="code-block">
              <pre>
                <code style={{ direction: 'ltr' }} dangerouslySetInnerHTML={{ __html: `192.168.1.1` }}></code>
              </pre>
            </div>
            <p>أو أحيانًا:</p>
            <div className="code-block">
              <pre>
                <code style={{ direction: 'ltr' }} dangerouslySetInnerHTML={{ __html: `192.168.0.1` }}></code>
              </pre>
            </div>
            <p>بيطلب منك اسم المستخدم وكلمة السر. غالبًا تكون:</p>
            <div className="code-block">
              <pre>
                <code style={{ direction: 'ltr' }} dangerouslySetInnerHTML={{ __html: `admin / admin` }}></code>
              </pre>
            </div>
            <p>أو تلقاها مكتوبة خلف الراوتر.</p>
          </li>
          <li>
            <strong>دور على خيار اسمه "Guest Network"</strong>
            <p>تلقاه في قسم "Wireless Settings" أو "Wi-Fi Settings".</p>
          </li>
          <li>
            <strong>فعل الشبكة (Enable Guest Network)</strong>
            <p>بيكون فيه زر تفعيل، شغّله.</p>
          </li>
          <li>
            <strong>اختر اسم للشبكة (SSID)</strong>
            <p>مثلًا: <strong style={{ color: 'var(--accent-green)' }}>`ضيوف_بو_سعيد`</strong></p>
          </li>
          <li>
            <strong>حط لهم كلمة مرور خاصة</strong>
            <p>حط باسورد غير عن شبكتك الأصلية، وخلها قوية بس سهلة عليهم شوي.</p>
            <blockquote>
              مثلًا: <span style={{ direction: 'ltr', display: 'inline-block', color: 'var(--accent-green)' }}>`Welcome2025!`</span>
            </blockquote>
          </li>
          <li>
            <strong>حدد صلاحيات الشبكة (اختياري)</strong>
            <p>بعض الراوترات تعطيك خيار تخلي الضيوف ما يشوفون الأجهزة اللي على الشبكة الأصلية. فعلها إذا تقدر.</p>
          </li>
          <li>
            <strong>اضغط "Save" أو "Apply"</strong>
          </li>
        </ol>

        <p>وبكذا تكون سويت شبكة خاصة للضيوف، لو أحد جاك قال:</p>
        <blockquote>
          "أعطني الرقم"،<br />
          تعطيه شبكة الضيوف وتقول له:<br />
          "خذ هذي، ولا تكثر تحميل  ".
        </blockquote>

        <hr />
        <h2>💡 10. غيّر بيانات الدخول للراوتر</h2>
        <p>لا تخلّي اسم المستخدم وكلمة المرور هي "admin" و"admin" أو فاضية.</p>
        <blockquote>
          ادخل إعدادات الراوتر، غيّرها لـ شي خاص فيك.
        </blockquote>

        <p>إذا طبقت هالخطوات، راح تطفش المخترق:</p>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-glow)', marginTop: '2rem' }}>"وراح يدور غيرك👻 "</p>
      </div>
    </section>
  );
}

export default WifiSecurityArticle;