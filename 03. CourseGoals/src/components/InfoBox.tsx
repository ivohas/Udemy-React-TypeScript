import { ReactNode } from 'react';

type HintModeBoxProps = {
    mode: "hint";
    children: ReactNode;
};

type WarningModeBoxProps = {
    mode: "warning";
    severity: "low" | "medium" | "high";
    children: ReactNode;
};

type InfoBoxProps = HintModeBoxProps | WarningModeBoxProps;

const InfoBox = (props: InfoBoxProps) => {
    const { mode, children } = props;
    if (mode === "hint") {
        return (
            <aside className='infobox infobox-hint'>
                <p>{children}</p>
            </aside>
        );
    } 
    const severity = props.severity;
    if (mode === "warning") {
        return (
            <aside className={`infobox infobox-warning warning--${severity}`}>
                <h2>Warning</h2>
                <p>{children}</p>
            </aside>
        );
    }
}

export default InfoBox;