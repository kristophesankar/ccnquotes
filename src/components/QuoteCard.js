import React from 'react'
import { connect } from 'react-redux'
import {
  QuoteDetailsCard,
  CustomCardBody,
  QuoteCardBody,
  QuoteCardAuthor,
  QuoteCardSource
} from '../styles/styles'

const QuoteCard = props => {
  return (
    <QuoteDetailsCard id='quoteCard' className='m-2'>
      <CustomCardBody className='p-2'>
        {props.quote.map(entry => (
          <div key={`quote-${entry.id}`}>
            <QuoteCardBody id='entryBody'>&quot;{entry.body}&quot;</QuoteCardBody>
            <QuoteCardAuthor id='entryAuthor'>by {entry.author}</QuoteCardAuthor>
            <QuoteCardSource id='entrySource'>Source:&nbsp;
              <i>
                <a href={entry.source} target='_blank' rel='noopener noreferrer'>
                  {entry.source}
                </a>
              </i>
            </QuoteCardSource>
          </div>
        ))}
      </CustomCardBody>
    </QuoteDetailsCard>
  )
}

function mapStateToProps ({ quotes }, props) {
  /* get quote from quote id */
  const quote = Object.values(quotes).filter(entry => {
    return parseInt(entry.id) === parseInt(props.quoteId)
  })
  return {
    quote
  }
}

export default connect(mapStateToProps)(QuoteCard)
