
public class FactoryMethodTest {
    public static void main(String[] args) {
        Document wordDocument = new WordDocumentFactory().createDocument();
        Document pdfDocument = new PdfDocumentFactory().createDocument();
        Document excelDocument = new ExcelDocumentFactory().createDocument();

        wordDocument.open();
        pdfDocument.open();
        excelDocument.open();
    }
}
