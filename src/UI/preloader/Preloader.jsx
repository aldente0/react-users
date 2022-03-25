import cl from './Preloader.module.scss'

function Preloader() {
    return <svg className={cl.spinner} viewBox="0 0 50 50">
    <circle className={cl.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
  </svg>
}

export {Preloader}