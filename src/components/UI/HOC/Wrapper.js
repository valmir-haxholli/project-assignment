const Wrapper = (Component) => ({...props}) => (
    <div >
        <Component {...props} />
    </div>
)

export default Wrapper;