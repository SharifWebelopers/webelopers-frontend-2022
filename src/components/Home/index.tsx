import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Header from "../Header";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import styles from "./Home.module.scss";

import cafebazaar from "../../assets/images/cafebazaar.png";
import quera from "../../assets/images/quera.png";
import Image from "next/future/image";
import classNames from "classnames";
import Footer from "../Footer";

import MohammadAminKarami from "../../assets/images/staff/heads/MohammadAminKarami.png";
import MohammadMosayyebi from "../../assets/images/staff/heads/MohammadMosayyebi.png";
import RoyaMohammadi from "../../assets/images/staff/heads/RoyaMohammadi.png";
import SanaDoshabchi from "../../assets/images/staff/marketing/SanaDoshabchi.png";
import planet1 from "../../assets/images/1.png";
import planet2 from "../../assets/images/2.png";
import planet3 from "../../assets/images/3.png";
import planet4 from "../../assets/images/4.png";
import sun from "../../assets/images/sun2.png";
import Staff from "../Staff";
import useMobile from "../../utils/useMobile";

const selectedStaffsDesktop = [
  {
    fullName: "محمدامین کرمی",
    image: MohammadAminKarami,
    role: "دبیر رویداد",
    linkedin: "https://www.linkedin.com/in/mohamadaminkarami",
    github: "https://github.com/mohamadaminkarami",
  },
  {
    fullName: "محمد مصیبی",
    image: MohammadMosayyebi,
    role: "نایب دبیر رویداد",
    linkedin: "",
  },
  {
    fullName: "رویا محمدی",
    image: RoyaMohammadi,
    role: "دبیر انسانی",
    linkedin:
      "https://www.linkedin.com/in/roya-mohammadi-431940217?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view",
  },
  {
    fullName: "ثنا دوشابچی",
    image: SanaDoshabchi,
    role: "دبیر مدیا",
    linkedin: "https://www.linkedin.com/in/sanadoushabchi",
  },
];

const selectedStaffsMobile = [
  {
    fullName: "محمدامین کرمی",
    image: MohammadAminKarami,
    role: "دبیر رویداد",
    linkedin: "https://www.linkedin.com/in/mohamadaminkarami",
    github: "https://github.com/mohamadaminkarami",
  },
  {
    fullName: "ثنا دوشابچی",
    image: SanaDoshabchi,
    role: "دبیر مدیا",
    linkedin: "https://www.linkedin.com/in/sanadoushabchi",
  },
];

const countDownDate = new Date("Sep 11, 2022 24:00:00").getTime();

function Home() {
  const router = useRouter();
  const isMobile = useMobile();
  const selectedStaffs = isMobile
    ? selectedStaffsMobile
    : selectedStaffsDesktop;
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  useEffect(() => {
    // Update the count down every 1 second
    const x = setInterval(function () {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      setCountdown({ days, hours, minutes, seconds });
    }, 1000);
  }, []);
  return (
    <div className={styles.homePage}>
      <Header />
      <div className={styles.section1}>
        <Image src={sun} className={styles.sun} />
        <div className={styles.section1Right}>
          <div className={styles.title}>
            WEBELOPERS
            <br />
            2&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;&nbsp;2
          </div>
          <button
            className={styles.registerBtn}
            onClick={() => router.push("/auth/signup")}
          >
            ثبت نام
          </button>
        </div>
      </div>
      <div className={styles.timeToStartWrapper}>
        <div className={styles.timeToStart}>
          <div className={styles.countdown}>
            <div className={styles.countdownItem}>
              <div className={styles.countdownValue}>
                {String(countdown.seconds).padStart(2, "0")}
              </div>
              <div className={styles.countdownUnit}>ثانیه</div>
            </div>
            <div className={styles.countdownItem}>
              <div className={styles.countdownValue}>
                {String(countdown.minutes).padStart(2, "0")}
              </div>
              <div className={styles.countdownUnit}>دقیقه</div>
            </div>
            <div className={styles.countdownItem}>
              <div className={styles.countdownValue}>
                {String(countdown.hours).padStart(2, "0")}
              </div>
              <div className={styles.countdownUnit}>ساعت</div>
            </div>
            <div className={styles.countdownItem}>
              <div className={styles.countdownValue}>
                {String(countdown.days).padStart(2, "0")}
              </div>
              <div className={styles.countdownUnit}>روز</div>
            </div>
          </div>
          <div className={styles.timeToStartTitle}>تا شروع رویداد!</div>
        </div>
      </div>
      <div className={styles.section2}>
        <Image src={planet1} className={styles.planet1} />
        <div className={styles.about}>
          <div className={styles.aboutTitle}>درباره رویداد</div>
          <p className={styles.aboutDescription}>
            پنجمین دوره رویداد مسابقه آموزشی وبلوپرز توسط انجمن علمی دانشکده
            مهندسی کامپیوتر دانشگاه صنعتی شریف برگزار می‌شود. این دوره با هدف
            آموزش دانش برنامه‌نویسی و توسعه وب تشکیل شده است تا پس از ارتقا سطح
            علمی شرکت‌کنندگان، دانش آموخته‌شده آنها را به چالش بکشد. وبلوپرز
            جایی‌ست که با کنار هم قرار دادن شرکت‌کنندگان و متخصصین این حوزه،
            فرآیند تبدیل ایده به محصول و کسب مهارت واقعی را سرعت می‌‌بخشد.
          </p>
        </div>
      </div>
      <div className={styles.section3}>
        <Image src={planet2} className={styles.planet2} />
        <div className={styles.timingWrapper}>
          <div className={styles.timing}>
            <div className={styles.timingTitle}>زمانبندی</div>
            <div className={styles.timeItem}>
              <div className={styles.timeItemDate}>
                ۳۰ <br /> مرداد
              </div>
              <div className={styles.timeItemTitle}>آغاز ثبت نام</div>
            </div>
            <div className={styles.timeItem}>
              <div className={styles.timeItemDate}>
                ۵ <br />
                شهریور
              </div>
              <div className={styles.timeItemTitle}> آغاز web talks</div>
            </div>
            <div className={styles.timeItem}>
              <div className={styles.timeItemDate}>
                ۱۱ <br />
                شهریور
              </div>
              <div className={styles.timeItemTitle}>آغاز تیم‌کشی</div>
            </div>
            <div className={styles.timeItem}>
              <div className={styles.timeItemDate}>
                ۲۱ <br />
                شهریور
              </div>
              <div className={styles.timeItemTitle}>افتتاحیه</div>
            </div>
            <div className={styles.timeItem}>
              <div className={styles.timeItemDate}>
                ۲۲ <br />
                شهریور
              </div>
              <div className={styles.timeItemTitle}>آموزش و پیاده‌سازی</div>
            </div>
            <div className={styles.timeItem}>
              <div className={styles.timeItemDate}>
                ۳۰ <br />
                مهر
              </div>
              <div className={styles.timeItemTitle}>
                ارائه و جذب سرمایه‌گذار
              </div>
            </div>
            <div className={styles.timeItem}>
              <div className={styles.timeItemDate}>
                ۱۴ <br />
                آبان
              </div>
              <div className={styles.timeItemTitle}>اختتامیه</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section4}>
        <Image src={planet3} className={styles.planet3} />
        <div className={styles.gifts}>
          <div className={styles.timingTitle}>جوایز</div>
          <div className={styles.giftItem}>
            <div className={styles.giftItemTitle}>تیم اول</div>
            <div className={styles.giftItemValue}>
              <span>۲۰</span>
              <br />
              میلیون تومان
            </div>
          </div>
          <div className={styles.giftItem}>
            <div className={styles.giftItemTitle}>تیم دوم</div>
            <div className={styles.giftItemValue}>
              <span>۱۲</span>
              <br />
              میلیون تومان
            </div>
          </div>
          <div className={styles.giftItem}>
            <div className={styles.giftItemTitle}>تیم سوم</div>
            <div className={styles.giftItemValue}>
              <span>۵</span>
              <br />
              میلیون تومان
            </div>
          </div>
          <div className={styles.giftItem}>
            <div className={styles.giftItemTitle}>تیم‌های برتر</div>
            <div className={styles.giftItemValue}>
              <span>۳ جایزه</span>
              <br />
              یک میلیون تومانی
            </div>
          </div>
        </div>
      </div>
      <div className={styles.section5}>
        <Image src={planet4} className={styles.planet4} />
        <div className={styles.sponsors}>
          <div className={classNames(styles.sponsor, styles.sponsorBazaar)}>
            <div className={styles.sponsorTitle}>حامی مالی رویداد</div>
            <Image
              src={cafebazaar}
              alt="cafe bazaar"
              width={200}
              height={100}
              className={styles.sponsorImage}
            />
          </div>
          <div className={styles.sponsor}>
            <div className={styles.sponsorTitle}>حامی رسانه‌ای رویداد</div>
            <Image
              src={quera}
              alt="quera"
              width={200}
              height={100}
              className={styles.sponsorImage}
            />
          </div>
        </div>
      </div>
      <div className={styles.section6}>
        <div className={styles.staffs}>
          <div className={styles.staffsTitle}>تیم برگزاری</div>
          <div className={styles.teamStaffs}>
            {selectedStaffs.map((data, index) => (
              <Staff key={index} data={data} />
            ))}
          </div>
          <div
            className={styles.seeAllStaff}
            onClick={() => router.push("/staffs")}
          >
            <ArrowCircleLeftOutlinedIcon />
            مشاهده تمام اعضا
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;
