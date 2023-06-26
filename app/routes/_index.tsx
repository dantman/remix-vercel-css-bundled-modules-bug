import type { V2_MetaFunction } from "@remix-run/node";
import styles from '../styles.module.css'

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const commonStyles = {
  height: 100,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black'
} as const

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <p>The following blocks are styled green using the respective method of CSS styles.</p>
      <div style={{ backgroundColor: '#fecaca', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <div style={{ ...commonStyles, backgroundColor: '#bbf7d0' }}>{'Inline CSS style={}'}</div>
        <div style={commonStyles} className={styles.module_class}>CSS Modules (import .module.css)</div>
      </div>
    </div>
  );
}
