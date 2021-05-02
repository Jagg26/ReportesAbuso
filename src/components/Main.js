import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import styled from 'styled-components';

const MainSection = styled.div`
    width: 100%;
    min-height: 800px;
    padding: 3rem;
    background-color:  white ;

`;

const HeaderWrapper = styled.header`
  width: 100%;
  min-height: 100px;
  background-color: #404040;
  color: black;
  margin: 0px auto;
  padding: 1.5rem;
`;

const Searchbar = styled.div`
    min-width: 40%;
    margin: auto;
`;

const SearchbarInput = styled.input`
    max-width: 30%;
    min-width: 200px;
    margin: auto;
`;

const SearchbarLabel = styled.label`
    color: white;
    font-size: 18px;
    font-weight: 550;
    font-family: Roboto, sans-serif;
    text-align: center;
    width: 100%;
    margin: auto;
    margin-bottom: 10px;
`;

const Table = styled.table`
    width: 70%;
    margin: 25px auto;
    background-color: white;
    border-width: 1px !important;

        td {
            text-align: center;
        }
`;

const Thead = styled.th`
    color: white;
    text-align: center;
    font-weight: bold;
    background-color:#404040;
`;

const Paginator = styled.nav`
    width: 70%;
    margin: auto;
`;

const Main = ({ data, setName }) => {

    const [paginatedData, setPaginatedData] = useState();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');


    const paginate = () => {
        setPaginatedData(_(data).slice(0).take(pageSize).value());
    }

    var molesters = Array.from(data);

    const pageSize = 10;


    const pageCount = molesters ? Math.ceil(molesters.length / pageSize) : 0;
    const pages = _.range(1, pageCount + 1);

    const pagination = (pageNo) => {
        setCurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedData = _(molesters).slice(startIndex).take(pageSize).value();
        setPaginatedData(paginatedData)
    }

    useEffect(() => {
        paginate()
    }, [pageCount])

    return (
        <div>
            <div>
                <HeaderWrapper>
                    <Searchbar>
                        <SearchbarLabel for="searchbar" >Busca denuncias por nombre o ciudad</SearchbarLabel>
                        <SearchbarInput type="text" className="form-control" id="searchbar" name="searchbar" onChange={e => { setSearchTerm(e.target.value) }} />
                    </Searchbar>
                </HeaderWrapper>
            </div>
            <MainSection >
                {!paginatedData ? ("No data found") : (

                    <Table className="table table-hover table-bordered bg-light">
                        <thead>
                            <tr>
                                <Thead>Nombre</Thead>
                                <Thead>Ciudad</Thead>
                                <Thead>Denuncia</Thead>
                            </tr>
                        </thead>

                        <tbody >
                            {
                                paginatedData.filter((val) => {
                                    if (searchTerm == '') {
                                        return val
                                    } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase()) || val.city.toLowerCase().includes(searchTerm.toLowerCase())) {
                                        return val
                                    }
                                }).map((val) => (
                                    <tr key={val._id}>
                                        <td>{val.name}</td>
                                        <td>{val.city}</td>
                                        <td><a href={val.evidence} target="_blank" rel="noreferrer" ><i class="fas fa-file-invoice"></i></a></td>
                                    </tr>

                                ))
                            }
                        </tbody>
                    </Table>
                )}
                <Paginator className="d-flex justify-content-center">
                    <ul className="pagination">
                        {
                            pages.map((page) => (
                                <li
                                    key={page}
                                    className={
                                        page === currentPage ? "page-item active" : "page-item"
                                    }>
                                    <p className="page-link"
                                        onClick={() => pagination(page)}
                                    >{page}</p>
                                </li>
                            ))
                        }
                    </ul>
                </Paginator>
            </MainSection>
        </div>

    );
}

export default Main;