import React from 'react';
import Pagination from 'reactstrap/lib/Pagination';
import PaginationItem from 'reactstrap/lib/PaginationItem';
import PaginationLink from 'reactstrap/lib/PaginationLink';

function PaginationComponent() {
    return (
        <Pagination aria-label='Page navigation example'>
            <PaginationItem disabled>
                <PaginationLink previous href='#'/>
            </PaginationItem>
            <PaginationItem active>
                <PaginationLink href='#'>
                    1
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href='#'>
                    2
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href='#'>
                    3
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href='#'>
                    4
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink href='#'>
                    5
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink next href='#'/>
            </PaginationItem>
        </Pagination>
    );
}

export default PaginationComponent;
