import WhitePawn from 'Images/Pawn-W.png'
import WhiteRook from 'Images/Rook-W.png'
import WhiteKnight from 'Images/Knight-W.png'
import WhiteBishop from 'Images/Bishop-W.png'
import WhiteQueen from 'Images/Queen-W.png'
import WhiteKing from 'Images/King-W.png'
import BlackPawn from 'Images/Pawn-B.png'
import BlackRook from 'Images/Rook-B.png'
import BlackKnight from 'Images/Knight-B.png'
import BlackBishop from 'Images/Bishop-B.png'
import BlackQueen from 'Images/Queen-B.png'
import BlackKing from 'Images/King-B.png'
import EmptySquare from 'Images/EmptySquare.png'

const IMAGES = {
  'test': "test",
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
  return IMAGES[piece];
}

module.exports = (piece) => image(piece);
