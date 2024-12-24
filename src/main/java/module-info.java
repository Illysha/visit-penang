module com.app.demo2 {
    requires javafx.controls;
    requires javafx.fxml;


    opens com.app.demo2 to javafx.fxml;
    exports com.app.demo2;
}