const Form = () => {
    return (<form>
        <input
            type="text"
            placeholder="Insira os nomes dos participantes"
        />
        <button disabled={true}>Adicionar</button>
    </form>
    );
}

export default Form;