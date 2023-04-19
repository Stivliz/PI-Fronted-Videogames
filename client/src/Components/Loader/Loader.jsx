import styles from './Loader.module.css'

const Loader = () => {

    return (
        <>
            <div className={styles.gif}>
                <img src={'https://i.pinimg.com/originals/ff/10/20/ff10203224533e717661e2dc2bf4b6b5.gif'} alt='loader' />
                
            </div>
        </>
    )
}

export default Loader;