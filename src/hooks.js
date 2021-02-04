import { useState } from "react";
import uuid from "uuid";
import axios from "axios";

const useFlip = () => {
    const [isFacingUp, toggleIsFacingUp] = useState(true);
    const flip = () => {
        toggleIsFacingUp(!isFacingUp);
    }

    return [isFacingUp, flip];
}

const useAxios = (baseUrl) => {
    const [cards, setCards] = useState([]);
    const addCard = async (name = "") => {
        const url = (name !== "") ? baseUrl + `/${name}/` : baseUrl;
        const response = await axios.get(url);
        setCards(cards => [...cards, { ...response.data, id: uuid() }]);
    }
    const resetCards = () => {
        setCards([]);
    }
    return [cards, addCard, resetCards];
}

export { useFlip, useAxios };