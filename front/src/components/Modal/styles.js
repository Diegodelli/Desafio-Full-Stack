import styled from "styled-components";

export const ContainerModal = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: var(--gray-scale-5);
  background-color: var(--black-opacity);

  .contentModal {
    width: 90%;
    max-width: 37rem;

    position: fixed;

    background-color: var(--gray-scale-2);

    border-radius: 2.4rem;

    animation: showModal 1.5s ease;
  }

  .headerModal {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 1.5rem;

    background-color: var(--gray-scale-3);

    border-top-left-radius: 2.4rem;
    border-top-right-radius: 2.4rem;

    height: 5rem;
  }

  .titleModal {
    font-size: 1.8rem;
    letter-spacing: 0.15rem;
  }

  .closeModal {
    background-color: transparent;
    color: var(--gray-scale-4);

    font-size: 1.6rem;
    font-weight: 700;

    border: none;

    cursor: pointer;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    width: 100%;

    padding: 2rem 1.375rem;

    background-color: var(--gray-scale-2);

    border-radius: 2.4rem;
  }

  form > div {
    align-items: flex-end;
  }

  input {
    height: 4rem;

    padding-left: 0.85rem;
    letter-spacing: 1px;

    background-color: var(--gray-scale-3);
    color: var(--gray-scale-5);

    border-radius: 2.4rem;
    border: none;

    margin-bottom: 0.6rem;
  }

  @keyframes showModal {
    0% {
      opacity: 0;
      top: 0%;
    }

    50% {
      opacity: 1;
      top: 30%;
    }
  }
`;
