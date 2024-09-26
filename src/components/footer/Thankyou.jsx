import LayoutsSection from "../layouts/LayoutsSection";

const Thankyou = () => {
  return (
    <LayoutsSection>
      <div className="font-bold text-center text-primary">
        <p data-aos="zoom-in-up" data-aos-duration="1100">
          Terima kasih sudah berkunjung ke laman situs kami!
        </p>
        <p data-aos="zoom-in-up" data-aos-duration="1300" className="px-10">
          Kami sangat menghargai kunjungan Anda dan berharap informasi yang
          tersedia bermanfaat. Jangan ragu untuk kembali lagi kapan pun!
        </p>
      </div>
    </LayoutsSection>
  );
};

export default Thankyou;
