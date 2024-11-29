import Footer from "@/commons/layout/footer";
import Form from "@/components/commons/form";
import SolplaceLogsNewAddImage from "@/components/domains/solplace-logs-new/add-image-section";
import SolplaceLogsNewInputSection from "@/components/domains/solplace-logs-new/input-section";
import { ISolplaceLogsNewSchema, solplaceLogsNewSchema } from "./form.schema";
import styles from "./styles.module.css";
import { useInitialize } from "./form.initialize";

export default function SolplaceLogsNewPage() {
  return (
    <main>
      <Form<ISolplaceLogsNewSchema>
        schema={solplaceLogsNewSchema}
        defaultValue={{ address: "서울특별시 중구 세종대로 110", lat: 37.5666, lng: 126.979 }}
        useInitialize={useInitialize}
      >
        <div className={styles.container}>
          <SolplaceLogsNewAddImage />
          <SolplaceLogsNewInputSection />
        </div>
        <Footer buttonText="로그 등록" />
      </Form>
    </main>
  );
}
