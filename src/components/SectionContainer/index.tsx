import styles from './styles.module.scss';

function SectionContainer(props) {

    return (
        <section className={styles.sectionContainer}>
            {props.children}
        </section>
    );
}

export default SectionContainer;

export function ContainerWithBetterName(props) {
    return (
        <div className={styles.containerGetBetterName}>
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

