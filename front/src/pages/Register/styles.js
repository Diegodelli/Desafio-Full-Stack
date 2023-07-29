import styled from "styled-components";

export const ContainerRegister = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.8rem;

  form {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;

    width: 90%;
    max-width: 39rem;

    padding: 2.5rem 2rem;

    background-color: var(--gray-scale-2);

    border-radius: 2.4rem;

    position: relative;

    .buttonBack {
      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 2.5rem;
      right: 2.5rem;

      height: 2.1rem;
      padding: 0 1.6rem;

      background-color: var(--color--brand2);
      color: var(--gray-scale-5);

      font-size: 1.1rem;
      font-weight: 600;
      letter-spacing: 0.15rem;

      border: none;
      border-radius: 0.8rem;

      cursor: pointer;
    }
  }
`;
