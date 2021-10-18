import styled from 'styled-components';


export const Wrapper = styled.div`
    width: 80%;
    margin: 50px auto;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    & .btn{
        flex: 0 0 100%;
    }
    & .card-header{
        & img{
            max-width: 100%;
            width: 500px;
            height: inherit;
            object-fit: cover;
        }
    }
    & .card-body{
        & h2{
            color: ${props => props.theme.fontColor}
        }
        & .container{
            margin-bottom:40px;
            display: flex;
            gap: 50px;
            & div{
                & p{
                    color: ${props => props.theme.fontColor};
                    & span {
                        opacity: 0.7;
                    }
                }
                & .len{
                    padding: 5px 10px 8px;
                    margin-left: 3px;
                    border-radius: 10px;
                    border: 1px solid ${props => props.theme.fontColor};
                }
            }
        }
    }
    

`;
