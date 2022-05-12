const handleOnGoButtonClick = () => {
    const { value } = document.getElementById('input-box');
    const iFrame = document.getElementById('iframe');
    iFrame.src = value;
}
