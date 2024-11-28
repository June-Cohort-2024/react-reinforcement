
export const Input = ( { type, label} ) => {
    return (
        <>
            <div class="mb-3">
                <label class="form-label">{label}</label>
                <input type={type} class="form-control"  />
            </div>
        </>
    )
}
