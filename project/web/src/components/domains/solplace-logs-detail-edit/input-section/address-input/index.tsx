import { InputAddressWithLabel } from "@/components/commons/input";
import styles from "./styles.module.css";
import { ISolplaceLogsDetailEditSchema } from "@/app/solplace-logs/[solplaceLogId]/edit/form.schema";

export default function SolplaceLogsDetailEditAddressInput() {
  return (
    <div className={styles.button}>
      <InputAddressWithLabel<ISolplaceLogsDetailEditSchema>
        label="플레이스 주소"
        placeholder="플레이스 주소 입력"
        readOnly
        name="address"
      />
    </div>
  );
}
