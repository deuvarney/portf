import { LegacyRef, forwardRef } from 'react';
import styles from './styles.module.scss';
// TODO: Create cleaner reusable implementation

type SectionContainerProps = {
    className?: string;
    children: React.ReactNode | React.ReactNode[];
}

const SectionContainer = forwardRef((props: SectionContainerProps, ref: LegacyRef<HTMLElement> | null) => {
    const {className = '', ...rest} = props;
    return (
        <section ref={ref} className={`${styles.sectionContainer} ${className}`} 
            {...rest}>
            {props.children}
        </section>
    );
});

SectionContainer.displayName = 'SectionContainer';

export default SectionContainer;

export function ContainerWithBetterName(props) {
    return (
        <div className={styles.containerGetBetterName + ' ' + (props.className|| '')}>
            {props.children}
        </div>
    )
}

export function MainContentContainerWithBetterName(props) {
    return (
        <div className={styles.mainContentContainerGetBetterName}>
            {props.children}
        </div>
    )
}

export function SectionTitleContainer(props) {
    return (
        <div className={styles.sectionTitleContainer}>
            {props.children}
        </div>
    )
}