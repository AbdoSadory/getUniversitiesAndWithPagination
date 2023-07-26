import React from 'react'
import styles from './styles.module.scss'
const Pagination = ({ handlingChangePage, currentpage, dataPages }) => {
  return (
    <section className={`${styles.paginationSection}`}>
      <h3 className="text-center"> Page: {currentpage}</h3>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${currentpage < 3 && 'disabled'}`}>
            <span
              className="page-link"
              onClick={() => {
                handlingChangePage(1)
              }}
            >
              First
            </span>
          </li>
          <li className={`page-item ${currentpage < 2 && 'disabled'}`}>
            <span
              className="page-link"
              onClick={() => {
                currentpage !== 1 && handlingChangePage(currentpage - 1)
              }}
            >
              Previous
            </span>
          </li>
          <li className="page-item">
            <span
              className="page-link"
              onClick={() => {
                currentpage === dataPages
                  ? handlingChangePage(currentpage - 2)
                  : currentpage !== 1 && handlingChangePage(currentpage - 1)
              }}
            >
              {currentpage >= dataPages - 1
                ? dataPages - 2
                : currentpage < 2
                ? currentpage
                : currentpage - 1}
            </span>
          </li>
          <li className="page-item">
            <span
              className="page-link"
              onClick={() => {
                console.log(currentpage)
                currentpage < 2
                  ? handlingChangePage(currentpage + 1)
                  : currentpage === dataPages
                  ? handlingChangePage(currentpage - 1)
                  : handlingChangePage(currentpage)
              }}
            >
              {currentpage >= dataPages - 1
                ? dataPages - 1
                : currentpage <= 2
                ? '2'
                : currentpage}
            </span>
          </li>
          <li className="page-item">
            <span
              className="page-link"
              onClick={() => {
                console.log(currentpage)
                if (currentpage === dataPages) return
                currentpage === 1
                  ? handlingChangePage(currentpage + 2)
                  : handlingChangePage(currentpage + 1)
              }}
            >
              {currentpage >= dataPages - 1
                ? dataPages
                : currentpage <= 2
                ? '3'
                : currentpage + 1}
            </span>
          </li>
          <li
            className={`page-item ${currentpage === dataPages && 'disabled'}`}
          >
            <span
              className="page-link"
              onClick={() => {
                currentpage !== dataPages && handlingChangePage(currentpage + 1)
              }}
            >
              Next
            </span>
          </li>
          <li
            className={`page-item ${currentpage > dataPages - 3 && 'disabled'}`}
          >
            <span
              className="page-link"
              onClick={() => {
                handlingChangePage(dataPages)
              }}
            >
              Last
            </span>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default Pagination
