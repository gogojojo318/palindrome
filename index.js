module.exports = Phrase;

// 文字列を逆順にする
function reverse(string) {
    return Array.from(string).reverse().join("");
  }
  
  // Phraseオブジェクトを定義する
  function Phrase(content) {
    this.content = content;
  
   // パリンドロームのテスト用に変換した訳文を返す
   this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
    }
  
  // コンテンツの文字だけを返す
  // 利用例:
  //   new Phrase("Hello, world!").letters() === "Helloworld"
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }


    // パリンドロームならtrueを、違うならfalseを返す
    this.palindrome = function palindrome() {
      return this.processedContent() === reverse(this.processedContent());
    }
  }
  
  // TranslatedPhraseオブジェクトを定義する
  function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;
  
    // パリンドロームのテスト用に変換した訳文を返す
    this.processedContent = function processedContent() {
      return this.translation.toLowerCase();
    }
  }
  
  TranslatedPhrase.prototype = new Phrase();