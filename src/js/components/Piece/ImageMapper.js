import WhitePawn from './../../../../images/Pawn-W.png'
import WhiteRook from './../../../../images/Rook-W.png'
import WhiteKnight from './../../../../images/Knight-W.png'
import WhiteBishop from './../../../../images/Bishop-W.png'
import WhiteQueen from './../../../../images/Queen-W.png'
import WhiteKing from './../../../../images/King-W.png'
import BlackPawn from './../../../../images/Pawn-B.png'
import BlackRook from './../../../../images/Rook-B.png'
import BlackKnight from './../../../../images/Knight-B.png'
import BlackBishop from './../../../../images/Bishop-B.png'
import BlackQueen from './../../../../images/Queen-B.png'
import BlackKing from './../../../../images/King-B.png'
import EmptySquare from './../../../../images/EmptySquare.png'

const IMAGES = {
  'wP': WhitePawn,
  'bP': BlackPawn,
  'wB': WhiteBishop,
  'bB': BlackBishop,
  'wN': WhiteKnight,
  'bN': BlackKnight,
  'wR': WhiteRook,
  'bR': BlackRook,
  'wQ': WhiteQueen,
  'bQ': BlackQueen,
  'wK': WhiteKing,
  'bK': BlackKing,
  'empty': EmptySquare
}

function image(piece) {
  return IMAGES.piece;
}

module.exports = (piece) => image(piece);
